import { BehaviorSubject } from "rxjs";
export interface Address {
    street: string,
    number: number;
}

export interface TestState {
    id: string,
    content: string;
    subState?: TestState[];
}

export let _testState: TestState = {
    id: '0',
    content: 'root content',
    subState: [{
        id: '00',
        content: 'firstChild',
        subState: [
            {
                id: '000',
                content: 'firstGrandson'
            },
            {
                id: '001',
                content: 'secondChild',
                subState: [
                    {
                        id: '0010',
                        content: 'secondGrandson'
                    },
                    {
                        id: '0011',
                        content: 'thirdGrandson'
                    }
                ]
            }
        ]
    },{
        id: '01',
        content: 'secondChild',
    }]


};

export const testStateSubject = new BehaviorSubject(_testState);
export const testState$ = testStateSubject.asObservable();
export const testState = () => testStateSubject.getValue();

export function updateTestState() {
    let previous = [...testState().subState];
    previous[0].content = 'NEW first child COntent'
    testStateSubject.next({ ...testState(), subState: [...previous] })
}
(<any>window).update = updateTestState;

