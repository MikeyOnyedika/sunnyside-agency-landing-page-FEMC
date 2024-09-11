function generateId(): string {
    const length = 12;
    const generatorString = "1234567890abcdefghijklmnopqrstuvwxyz";
    let id = "";
    for (let i = 0; i < length; i++) {
        const randomChar = generatorString[Math.floor(Math.random() * generatorString.length)];
        id += randomChar;
    }
    return id;
}


export function createProxiedState<T extends Record<string | symbol, any>>(initialValue: T): {
    state: T,
    addListener: (fn: (state: T, oldState: T) => void) => string,
    removeListener: (listenerId: string) => void,
    listeners: { id: string, fn: (state: T, oldState: T) => void }[]
} {
    // initialize thelisteners map
    let listeners: { id: string, fn: (state: T, oldState: T) => void }[] = [];

    `
    // sample shape of listeners map
        listeners = [
            {
                id:kaiwejalkdjf,
                fn: (state, oldState) =>{},
            },
            {
                id:292oijkasdfas,
                fn: (state, oldState) =>{},
            },
        ]
    `
    const state = new Proxy<typeof initialValue>(initialValue, {
        set(target, property: keyof T, value) {
            if (property in target) {
                let oldValue = target[property]
                if (oldValue != value) {
                    target[property] = value;
                    const oldState = { ...target };
                    for (const listener of listeners) {
                        // calling listener functions in sequence
                        listener.fn(target, oldState);
                    }
                }
            }
            return true;
        },
        get(target, property) {
            if (property in target) {
                return target[property];
            }
            return undefined;
        }
    });

    function addListener(fn: (state: T, oldState: T) => void): string {
        const listenerId = generateId()
        listeners.push({
            id: listenerId,
            fn
        })
        return listenerId;
    }

    function removeListener(listenerId: string) {
        listeners = listeners.filter(listener => listener.id != listenerId);
    }

    return { state, addListener, removeListener, listeners };
}
