import React, { useState, useEffect } from 'react';
import { CAR_MODELS } from '../data/cars';
import { formatCurrency } from '../utils/calculator';
import ResultTable from './ResultTable';
import peroduaLogo from '../assets/perodua.png';
import qrCode from '../assets/qr.png';

const Calculator = () => {
    const [selectedModelId, setSelectedModelId] = useState(CAR_MODELS[0].id);
    const [selectedVariantIndex, setSelectedVariantIndex] = useState(1); // Default to '1.5 H' as in screenshot (middle one)
    const [downpayment, setDownpayment] = useState(7000); // Default from screenshot
    const [interestRate, setInterestRate] = useState(2.60); // Default from screenshot

    const model = CAR_MODELS.find(m => m.id === selectedModelId);
    const variant = model.variants[selectedVariantIndex];

    const carPrice = variant.price;
    const loanAmount = carPrice - downpayment;

    // Handler for variant selection
    const handleVariantChange = (index) => {
        setSelectedVariantIndex(index);
        // Optional: Reset downpayment or keep it? Keeping it is better UX usually.
    };

    return (
        <>
            <div className="calculator-card glass">
                <div className="header-branding">
                    <img src={peroduaLogo} alt="Perodua Logo" className="brand-logo" />
                    <h1 className="title">Qiu Perodua</h1>
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
                    {/* Model Selection */}
                    <div className="input-group">
                        <label>MODEL</label>
                        <select
                            value={selectedModelId}
                            onChange={(e) => {
                                setSelectedModelId(e.target.value);
                                setSelectedVariantIndex(0); // Reset variant on model change
                            }}
                        >
                            {CAR_MODELS.map(m => (
                                <option key={m.id} value={m.id}>{m.name.toUpperCase()}</option>
                            ))}
                        </select>
                    </div>

                    {/* Variant Selection */}
                    <div className="input-group">
                        <label>VARIANT</label>
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

                    {/* Inputs */}
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


            </div>
            {/* Fireflies */}
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
        </>
    );
};

export default Calculator;
