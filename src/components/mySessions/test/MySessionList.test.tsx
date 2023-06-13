import {describe, it, vi, expect} from 'vitest';
import {act, render, screen} from '@testing-library/react';
import MySessionsList from "../MySessionsList";
import {Session} from "../../../types/types";
import {renderWithRouter} from "../../../utils/testUtils";

describe("MySessionsList", () => {
    it("renders loader in case of empty sessions", () => {
        // given
        const sessions: Session[] = [];

        // when
        render(<MySessionsList sessions={sessions} setCheck={vi.fn()}/>)

        // then
        expect(screen.findByRole("progressbar")).not.toBeNull();
    })

    it.skip("maps sessions to grid", () => {
        // given
        const sessions: Session[] = [
            {
                name: 'sessionName',
                notes: 'exampleNoteName',
                creationDate: new Date(),
                plannedDate: null,
                id: 1
            }
        ];
        const mockCheckFunction = vi.fn(() => console.log("MOCKED HANDLER"));

        // when
        renderWithRouter(<MySessionsList sessions={sessions} setCheck={mockCheckFunction}/>);
        const button = screen.getByText("Remove");

        act(() => {
            button.click();
        })

        // then
        expect(screen.getByText(new RegExp(sessions[0].notes))).not.toBeNull();
        expect(mockCheckFunction).toHaveBeenCalled();
    })
})