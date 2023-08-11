import React, {
    ChangeEvent,
    createContext,
    FC,
    ReactNode,
    useContext,
    useState
} from "react";

type SearchContext = {
    searchProduct: string;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchContext = createContext({} as SearchContext);
export const useSearch = () => useContext(SearchContext);
export const SearchProvider: FC<{
    children?: ReactNode | undefined
}> = props => {
    const [searchProduct, setSearchProduct] = useState<string>('');

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setSearchProduct(event.target.value);

    const searchValues = {
        searchProduct,
        onChangeHandler
    };

    return (
        <SearchContext.Provider value={searchValues}>
            {props.children}
        </SearchContext.Provider>
    );
};
