export const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY'

export function toogleDetailVisibility(isVisible: boolean) {
    return { type: TOGGLE_VISIBILITY, isVisible }
}