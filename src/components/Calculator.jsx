import React, { useState, useCallback } from 'react';
import { CAR_MODELS } from '../data/cars';
import { formatCurrency } from '../utils/calculator';
import ResultTable from './ResultTable';
import Particles from './Particles';
import Fireworks from './Fireworks';
import CornerAccents from './CornerAccents';
import KetupatIcon from './KetupatIcon';
import { CrescentMoon, Star } from './CelestialElements';
import peroduaLogo from '../assets/perodua.png';
import qrCode from '../assets/qr.png';

const Calculator = () => {
    const [selectedModelId, setSelectedModelId] = useState(CAR_MODELS[0].id);
    const [selectedVariantIndex, setSelectedVariantIndex] = useState(1);
    const [downpayment, setDownpayment] = useState(7000);
    const [interestRate, setInterestRate] = useState(2.60);
    const [fireworkTrigger, setFireworkTrigger] = useState({ count: 0, position: 'left' });

    const model = CAR_MODELS.find(m => m.id === selectedModelId);
    const variant = model.variants[selectedVariantIndex];

    const carPrice = variant.price;
    const loanAmount = carPrice - downpayment;

    const triggerFirework = useCallback((position) => {
        setFireworkTrigger(prev => ({
            count: prev.count + 1,
            position
        }));
    }, []);

    const handleModelChange = (modelId) => {
        setSelectedModelId(modelId);
        setSelectedVariantIndex(0);
        setDownpayment(0);
        triggerFirework('left');
    };

    const handleVariantChange = (index) => {
        setSelectedVariantIndex(index);
        setDownpayment(0);
        triggerFirework('right');
    };

    return (
        <>
            {/* Traditional Hari Raya Background Elements */}
            <div className="pattern-background" />
            <div className="ambient-light ambient-light-1" />
            <div className="ambient-light ambient-light-2" />
            
            <Particles />
            <Fireworks trigger={fireworkTrigger.count} position={fireworkTrigger.position} />
            
            <div className="calculator-card glass">
                <CornerAccents />
                
                <div className="header-branding">
                    <img src={peroduaLogo} alt="Perodua Logo" className="brand-logo" />
                    <div className="title-container">
                        <h1 className="title">QIU PERODUA</h1>
                    </div>
                </div>

                <ResultTable loanAmount={loanAmount} rate={interestRate} />

                <div className="media-section">
                    {model.image && (
                        <div className="car-image-container">
                            <img key={model.id} src={model.image} alt={model.name} className="car-image" />
                        </div>
                    )}
                    <div className="qr-container">
                        <img src={qrCode} alt="Scan QR" className="qr-code" />
                        <span className="qr-text">SCAN FOR ENQUIRY</span>
                    </div>
                </div>

                <div className="form-section">
                    <div className="input-group">
                        <label>Model</label>
                        <select
                            value={selectedModelId}
                            onChange={(e) => handleModelChange(e.target.value)}
                        >
                            {CAR_MODELS.map(m => (
                                <option key={m.id} value={m.id}>{m.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="input-group">
                        <label>Variant</label>
                        <div className="variant-options">
                            {model.variants.map((v, idx) => (
                                <button
                                    key={v.name}
                                    className={`variant-btn ${idx === selectedVariantIndex ? 'active' : ''}`}
                                    onClick={() => handleVariantChange(idx)}
                                >
                                    {v.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="summary-row highlight-yellow">
                        <span>CAR PRICE OTR</span>
                        <span className="price-tag">{formatCurrency(carPrice)}</span>
                    </div>

                    <div className="inputs-grid">
                        <div className="input-group">
                            <label>DOWNPAYMENT (RM)</label>
                            <input
                                type="number"
                                value={downpayment}
                                onChange={(e) => setDownpayment(Number(e.target.value))}
                                min="0"
                                step="100"
                            />
                        </div>

                        <div className="input-group">
                            <label>INTEREST RATE (%)</label>
                            <input
                                type="number"
                                value={interestRate}
                                onChange={(e) => setInterestRate(Number(e.target.value))}
                                min="0"
                                step="0.01"
                            />
                        </div>
                    </div>

                    <div className="summary-row loan-summary">
                        <span>TOTAL LOAN AMOUNT</span>
                        <span className="loan-amount">{formatCurrency(loanAmount)}</span>
                    </div>
                </div>
                
                {/* Traditional Ketupat Decoration */}
                <div className="ketupat-decoration">
                    <KetupatIcon size="50" />
                </div>
            </div>
            
            {/* Traditional Gold Celestial Elements */}
            <div className="celestial-element moon-1">
                <CrescentMoon size="20" />
            </div>
            <div className="celestial-element moon-2">
                <CrescentMoon size="18" />
            </div>
            <div className="celestial-element star-1">
                <Star size="16" />
            </div>
        </>
    );
};

export default Calculator;
