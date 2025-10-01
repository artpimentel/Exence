export function formatPhoneNumber(phoneNumber: string): string {
  let cleanNumber = String(phoneNumber).replace(/\D/g, "");

  if (
    cleanNumber.startsWith("55") &&
    (cleanNumber.length === 12 || cleanNumber.length === 13)
  ) {
    cleanNumber = cleanNumber.substring(2);
  }

  if (cleanNumber.length < 10) {
    return phoneNumber;
  }

  let formattedNumber = cleanNumber;

  if (cleanNumber.length === 10) {
    formattedNumber = cleanNumber.replace(
      /^(\d{2})(\d{4})(\d{4})$/,
      "($1) $2-$3"
    );
  } else if (cleanNumber.length === 11) {
    formattedNumber = cleanNumber.replace(
      /^(\d{2})(\d{5})(\d{4})$/,
      "($1) $2-$3"
    );
  } else {
    formattedNumber = cleanNumber;
  }

  return `+55 ${formattedNumber}`;
}
