import {UserType} from '../HW8';

export type ActionsType = ReturnType<typeof sortUpOrDownAC> | ReturnType<typeof checkByAgeAC>

export const homeWorkReducer = (state: Array<UserType>, action: ActionsType): Array<UserType> => {
    switch (action.type) {
        case 'sort': {
            const selector = action.payload.selector === 'up';

            return [...state.sort((a, b) => {
                return (selector) ? b.age - a.age : a.age - b.age;
            })]
        }
        case 'check': {
            return state.filter(p => p.age > action.payload.age);
        }
        default:
            return state;
    }
}

export const sortUpOrDownAC = (selector: string) => {
    return {
        type: 'sort',
        payload: {
            selector
        }
    } as const
}

export const checkByAgeAC = (age: number) => {
    return {
        type: 'check',
        payload: {
            age
        }
    } as const
}