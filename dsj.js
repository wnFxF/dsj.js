export async function dsj() {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 1500);

    await fetch('http://localhost:6463/', {
      signal: controller.signal,
      mode: 'no-cors',
    });

    clearTimeout(timeout);
    return true;
  } catch (err) {
    return false;
  }
}
