import TextChanger from "./TextChanger";
import Nav from "./Nav";

type Props = {};

const keyWords = ["technolgy", "products", "services"];

const index = (props: Props) => {
  return (
    <div className="h-screen w-screen bg-home-bg-img bg-center bg-cover overflow-y-hidden">
      <div className="w-full h-full backdrop-blur-lg text-white px-[10%]">
        <Nav />

        <div className="h-4/5 flex items-center">
          <div className="left-pane">
            <h1
              className={`mb-4 text-center text-[27px] font-[700] ${style["left-pane-h1"].medium}`}
            >
              We've got a reliable source of premium <br />{" "}
              <TextChanger data={keyWords} />
              stay tuned.
            </h1>
            <p className="text-center font-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
              pariatur, corporis inventore magni.
            </p>
          </div>
          <div className="right-pane hidden">hello</div>
        </div>

        <div>Icon buttons</div>
      </div>
    </div>
  );
};

// can be in a different file
const style = {
  "left-pane-h1": {
    medium: "mobile_lg:font-[25px] mobile_lg:font-[900]",
    desktop: "",
    large: "",
  },
};

export default index;
