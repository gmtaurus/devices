/**
 * Created by gaomin on 16/11/28.
 */
export function statusFormat (value) {
	let statusText = {
        '0': '完好',
        '1': '损坏',
        '2': '报废'
    };
    return statusText[value];
};
export function borrowStatusText (value) {
	let statusText = {
        '0': '可用',
        '1': '已借出'
    };
    return statusText[value];
}