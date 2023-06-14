import {describe, it, vi, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import MySessionsList from "../MySessionsList";
import {Session} from "../../../types/types";

describe("MySessionsList", () => {
    it("renders loader in case of empty sessions", () => {
        // given
        const sessions: Session[] = [];

        // when
        render(<MySessionsList sessions={sessions} setCheck={vi.fn()}/>)

        // then
        expect(screen.findByRole("progressbar")).not.toBeNull();
    })
})