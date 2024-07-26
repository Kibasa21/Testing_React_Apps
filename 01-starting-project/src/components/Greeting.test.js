import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"

describe('Greeting component', () => {
    test('renders Hello World as a text', () => {
        //Arrange, Act, Assert.
        //Arrange. It means to set up the test.
        render(<Greeting />);

        //Act. It means to execute the test.
        //Nothing...

        //Assert. It means to check the result.
        const helloWorldElement = screen.getByText('Hello World!', {exact: true});//This is the assertion that checks if the text Hello World is in the document.
        expect(helloWorldElement).toBeInTheDocument();//This is the assertion that checks if the helloWorldElement is in the document.
    });// exact: true means that the text should be exactly Hello World, not Hello World! or Hello World!! etc. And exact: false means that the text should contain Hello World, not Hello World! or Hello World!! etc.

    test('renders good to see you if the button was NOT clicked', () => {
        render(<Greeting />);

        const paragraphElement = screen.getByText(/It's good to see you/, {exact: true});
        expect(paragraphElement).toBeInTheDocument();
    });

    test('renders Changed! if the button was clicked', () => {
        //Arrange
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole('button');//This is the assertion that checks if the buttonElement is in the document.
        buttonElement.click();// Act. This is the action that clicks the buttonElement. How dos it choose the button? It chooses the button by the role attribute. The role attribute is a special attribute that is used to identify the role of an element. In this case, the role attribute is button, so the buttonElement is the button element.
        //Ou userEvent.click(buttonElement);

        //Assert
        const paragraphElement = screen.getByText('Changed!', {exact: true});
        expect(paragraphElement).toBeInTheDocument();
    });

    test('does not render good to see you if the button was clicked', () => {
        //Arrange
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole('button');
        buttonElement.click();

        //Assert
        const paragraphElement = screen.queryByText(/It's good to see you/, {exact: true});
        expect(paragraphElement).not.toBeInTheDocument();
    });//queryByText is like getByText, but it does not throw an error if the element is not in the document. It returns null instead. So, the assertion expect(paragraphElement).not.toBeInTheDocument(); checks if the paragraphElement is not in the document. If it is not in the document, the test passes. If it is in the document, the test fails.

});//This is a test suite that contains a test case. A test suite is a group of test cases that test the same component or function etc.
