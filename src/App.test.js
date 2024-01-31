import {availableTimesReducer, updateTimes} from './App';

test('Checks correctness of available time function', () => {
    const expectedValue = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const actualValue = availableTimesReducer(0, {type: "UPDATE_TIMES"});

    expect(actualValue).toMatchObject(expectedValue);
})

test('Checks correctness of update time function', () => {
    const expectedValue = { type: 'UPDATE_TIMES', payload: {selectedDate: '31.01.2024'} };
    const actualValue = updateTimes('31.01.2024');

    expect(actualValue).toMatchObject(expectedValue);
})