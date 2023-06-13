import {describe, it, expect} from 'vitest';
import {render} from '@testing-library/react';
import Introduction from '../Introduction';

describe("Introduction", () => {
    it("maps grid components", () => {
        // given

        // when
        const component = render(
            <Introduction/>
        )

        const grids = component.getAllByText(/Feature/);

        // then
        expect(grids).toHaveLength(6);
    })
})