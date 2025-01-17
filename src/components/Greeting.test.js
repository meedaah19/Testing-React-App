import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe('Greeting component', () => {
    test('renders Hello World as a text', () => {
        render(<Greeting />);
    
        const helloWorldElement = screen.getByText('Hello World', { exact: false});
        expect(helloWorldElement).toBeInTheDocument();
    });

    test("renders It's good to see you if the button was Not clicked", () => {
        render(<Greeting/>);

        const checkText = screen.getByText("It's good to see you", {exact: false});
        expect(checkText).toBeInTheDocument();
    });

    test('renders Changed! if the button was clicked',  async () => {
        render(<Greeting/>);

        const buttonElement = screen.getByRole('button');
         await userEvent.click(buttonElement);

         const outputElement = screen.getByText('Changed!');
         expect(outputElement).toBeInTheDocument();
    });

    test("does not renders if It's good to see you is visible", async () => {
        render(<Greeting/>);

        const buttonElement = screen.getByRole('button');
        await userEvent.click(buttonElement);

        const outputElement = screen.queryByText("It's good to see you", {exact: false});
        expect(outputElement).toBeNull();
    })
});

