import { BehaviorSubject } from "rxjs";
export interface Address {
    street: string,
    number: number;
}

export interface TestState {
    id: string,
    content: string;
    timesReRendered: number;
    subState?: TestState[];
}

export let _testState: TestState = {
    id: '0',
    content: 'root content',
    timesReRendered: 0,
    subState: [{
        id: '00',
        content: 'firstChild',
        timesReRendered: 0,
        subState: [
            {
                id: '000',
                content: 'firstGrandson',
                timesReRendered: 0,

            },
            {
                id: '001',
                content: 'secondChild',
                timesReRendered: 0,

                subState: [
                    {
                        id: '0010',
                        content: 'secondGrandson',
                        timesReRendered: 0,

                    },
                    {
                        id: '0011',
                        content: 'thirdGrandson',
                        timesReRendered: 0,
                    }
                ]
            }
        ]
    },{
        id: '01',
        content: 'secondChild',
        timesReRendered: 0,
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

