export const renderFloatValue = (value: String | Number) => {
    if (!value || value === '' || Number(value) === NaN) {
        return '0.00';
    }
    return Number(value)?.toFixed(2);
};