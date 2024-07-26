import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe('Async component', () => {//Criamos esse falso request para simular o request que o componente Async faz para o servidor, já que não queremos ter que fazer request toda vez que formos testar. O request é feito com a função fetch. A função fetch é uma função global, então ela está no objeto window. A função fetch é usada no componente Async para fazer um request para o servidor.
    test('renders posts if request succeeds', async () => {
        window.fetch = jest.fn();//Mocking the fetch function. The fetch function is a function that is used to make requests to the server. The fetch function is a global function, so it is in the window object. The fetch function is used in the Async component to make a request to the server
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First post'}]
        });//mockResolvedValueOnce is a function that is used to mock the value that the fetch function returns. In this case, the fetch function returns a promise that resolves. The promise that resolves is an empty promise
        render(<Async />);//Arrange

        const listItemElements = await screen.findAllByRole("listitem");//get all the list items in the document. The role attribute is a special attribute that is used to identify the role of an element. In this case, the role attribute is listitem, so the listItemElements is the list items in the document.
        expect(listItemElements).not.toHaveLength(0);//Assert. Since the request succeeds, the listItemElements should not be empty. So, the assertion expect(listItemElements).not.toHaveLength(0); checks if the listItemElements is not empty.
    });//This is a test case that tests if the Async component renders the posts if the request succeeds.
});