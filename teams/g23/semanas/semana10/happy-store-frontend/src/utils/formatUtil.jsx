export const formatCurrency = amount => amount.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 });

export const formatQuantity = quantity => quantity.toLocaleString('en-US', { minimumIntegerDigits: 2 });