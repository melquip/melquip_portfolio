export const loadState = (keys) => {
	try {
		let serializedState = null;
		let err = false;
		serializedState = keys.reduce((serialSt, key) => {
			serialSt[key] = localStorage.getItem('melquip_' + key);
			if(serialSt[key] !== null) {
				serialSt[key] = JSON.parse(serialSt[key]);
			} else {
				err = true;
			}
			return serialSt;
		}, {})
		return serializedState === null || err ? undefined : serializedState;
	} catch (err) {
		console.error('loadState:', err);
		return undefined;
	}
}

export const saveState = (state, keys) => {
	try {
		let serializedState = null;
		if (keys.length > 0) {
			keys.forEach(key => {
				serializedState = JSON.stringify(state[key]);
				localStorage.setItem('melquip_' + key, serializedState);
			});
		} else {
			serializedState = JSON.stringify(state);
			localStorage.setItem('melquip_state', serializedState);
		}
	} catch (err) {
		throw new Error('Not able to set local storage: ', err);
	}
}