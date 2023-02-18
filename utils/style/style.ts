export const style = (cssText: string) => {
    const style = document.createElement("style");
    style.textContent = cssText;
    return () => style;
}