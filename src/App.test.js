import {availableTimesReducer, updateTimes} from './App';

test('Checks correctness of available time function', () => {
    const expectedValue = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const actualValue = availableTimesReducer(0, {type: "UPDATE_TIMES", payload: {availableTimes: expectedValue}});

    expect(actualValue).toMatchObject(expectedValue);
})

test('Checks correctness of update time function', () => {
    const timeArray = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
    const expectedValue = { type: 'UPDATE_TIMES', payload: {selectedDate: '31.01.2024', availableTimes: timeArray} };
    const actualValue = updateTimes('31.01.2024', timeArray);

    expect(actualValue).toMatchObject(expectedValue);
})