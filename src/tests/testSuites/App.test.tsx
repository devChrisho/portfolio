import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import App from "../../App";

describe("App unit test", () => {
  it("should pass snapshot", () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
