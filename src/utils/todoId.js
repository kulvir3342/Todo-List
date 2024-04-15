export async function generateTodoId() {
    const timestamp = Date.now().toString(36); // Convert current timestamp to base 36 string
    const randomStr = Math.random().toString(36).substr(2, 5); // Generate random string
    return timestamp + '-' + randomStr; // Combine timestamp and random string
  }