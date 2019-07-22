export class LazyLoad {
    static LoadTemplate(path, onLoadCallback, onErrorCallback) {
        const script = document.createElement('script');
        script.src = path;
        script.onload = onLoadCallback;
        script.onerror = onErrorCallback;
        document.head.appendChild(script);
    }
}