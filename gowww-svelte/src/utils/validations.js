export function requiredValidation(value) {
  if (!value || value.trim() === '') {
    return false;
  }

  return true;
}