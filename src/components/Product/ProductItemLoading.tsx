import ReactPlaceholder from "react-placeholder/lib";
import { RectShape, TextBlock } from "react-placeholder/lib/placeholders";
import "react-placeholder/lib/reactPlaceholder.css";

const awesomePlaceholder = (
  <div className="flex flex-col items-center">
    <RectShape
      style={{
        width: "100%",
        backgroundColor: "#e5e5e5",
        margin: 0,
        aspectRatio: "1/1",
      }}
    />
    <TextBlock
      style={{
        fontSize: "0.75rem",
        width: "60%",
        marginTop: 10,
        fontStyle: "italic",
        borderRadius: "5",
      }}
      rows={1}
      color="#e5e5e5"
    />
    <TextBlock
      style={{
        fontSize: "0.75rem",
        width: "90%",
        marginTop: 10,
        fontStyle: "italic",
      }}
      rows={2}
      color="#e5e5e5"
    />
    <TextBlock
      style={{
        fontSize: "0.75rem",
        width: "40%",
        marginTop: 10,
        fontStyle: "italic",
      }}
      rows={1}
      color="#e5e5e5"
    />
  </div>
);

const ProductItemLoading: React.FC = () => {
  return (
    <div className="w-1/4 pt-12 px-2.5 ">
      <ReactPlaceholder
        ready={false}
        showLoadingAnimation
        customPlaceholder={awesomePlaceholder}
      >
        <p></p>
      </ReactPlaceholder>
    </div>
  );
};

export default ProductItemLoading;
