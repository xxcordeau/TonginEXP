import React, { useState, useRef, useEffect } from "react";
import { Stage, Layer, Line, Text } from "react-konva";
import styled from "styled-components";
import CloseIcon from "../icon/closeIcon";
import BlankBoxIcon from "../icon/blankBox";
import EraserIcon from "../icon/eraserIcon";
import DrawingPen from "../icon/drawingPen";
import API from "../../API/API";
import DetailDrawBlankModalComponent from "./detailDrawBlankModal";
const TopArea = styled.div``;
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2); /* 배경을 약간 어둡게 만듭니다. */
  z-index: 9998; /* 모달보다 아래에 위치하도록 설정합니다. */
`;

const CalculatorComponentWrapper = styled.div`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-use-select: none;
  user-select: none;
  user-select: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  width: 90vw;
  height: 98vh;
  background-color: #f2f2f2;
  border-radius: 0.8vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ToolContainer = styled.div`
  padding-left: 4vw;
  width: 90vw;
  height: 8vh;
  display: flex;
`;
const ColorCanvasBox = styled.div`
  width: 24vw;
  height: 8vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ColorCanvastitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2vh;
  margin-bottom: 0.8vh;
  font-size: 1.6vw;
`;
const ColorCanvas = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0vw 3vw 0vw 3vw;
  height: 3vh;
`;

const ColorPicker = styled.div<{
  $bgColor?: string;
  outlineColor?: string;
}>`
  background-color: ${(props) => props.$bgColor};
  border-radius: 50vh;
  width: 3.4vw;
  height: 2.5vh;
  outline: ${(props) => props.outlineColor} solid #ffffff;
`;
const SizePicker = styled.div<{
  $widthSize?: string;
  $heightSize?: string;
}>`
  background-color: #ffffff;
  border-radius: 50vh;
  width: ${(props) => props.$widthSize};
  height: ${(props) => props.$heightSize};
  outline: 0.2vw solid #e1e1e1;
`;
const CanvasPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 86vw;
  height: 88vh;
  margin-bottom: 2vw;
  background-color: #ffffff;
  border-radius: 0.8vw;
`;
const CanvasToolBox = styled.div`
  width: 34vw;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CanvasTool = styled.div`
  border-radius: 10vw 10vw 10vw 10vw;
  width: 28vw;
  height: 5.4vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0 0.5vh 0.5vh rgba(0, 0, 0, 0.03),
    0 0.5vh 0.5vh rgba(0, 0, 0, 0.003);
`;
const CloseBox = styled.div`
  margin: 2vw 2vw 0vw auto;

  display: flex;
  align-items: top;
  justify-content: end;
`;
const CanvasPanelMask = styled.div``;
interface CalculatorComponentProps {
  onClose: () => void;
  style?: React.CSSProperties;
  setIsSave: any;
  setIsScrolled: any;
  isSave: any;
  lines: any;
  setLines: any;
  reNum?: string;
}

const DetailDrawingPanelComponent: React.FC<CalculatorComponentProps> = ({
  onClose,
  style,
  setIsSave,
  isSave,
  setIsScrolled,
  lines,
  setLines,
  reNum,
}) => {
  const stageRef = useRef<any>(null);
  const [tool, setTool] = useState<string>("pen");
  const [penColorVisible, setPenColorVisible] = useState<boolean>(false);
  const [eraserSizeVisible, setEraserSizeVisible] = useState<boolean>(false);
  const [eraserSize, setEraserSize] = useState<number>();
  const [penColor, setPenColor] = useState<any>();
  const [penSize, setPenSize] = useState<number>();
  const [blankBoxVisible, setBlankBoxVisible] = useState<boolean>(false);

  const [isDrawing, setIsDrawing] = useState<boolean>(false);

  const handleMouseDown = (e: any) => {
    setIsDrawing(true);
    const pos = stageRef.current?.getPointerPosition();
    if (pos) {
      setLines([
        ...lines,
        {
          tool,
          points: [pos.x, pos.y],
          stroke: penColor,
          strokeWidth: tool === "eraser" ? eraserSize : penSize,
        },
      ]);
    }
  };
  const handleMouseMove = (e: any) => {
    if (!isDrawing) return;
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    lastLine.points = lastLine.points.concat([point.x, point.y]);
    setLines([...lines]);
    setIsSave([...lines]);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    setIsSave(lines);
  };
  const selectPen = () => {
    setPenColorVisible(true);
    setEraserSizeVisible(false);
    setTool("pen");
  };
  const selectEraser = () => {
    setEraserSizeVisible(true);
    setPenColorVisible(false);
    setTool("eraser");
    setEraserSize(20);
  };

  const isBlank = () => {
    setBlankBoxVisible(true);
  };
  const onBlankData = () => {
    setBlankBoxVisible(false);
    setIsSave((e: any) => isSave.splice[0]);
  };
  const BlankClose = () => {
    setBlankBoxVisible(false);
  };
  const divRef = useRef<any>(null);
  const [dimensions, setDimensions] = useState<any>({
    width: 0,
    height: 0,
  });
  const colorArr = [
    { color: "#000000", name: "Black" },
    { color: "#FD6C60", name: "red" },
    { color: "#009dff", name: "blue" },
  ];
  const eraserArr = [
    { size: 20, width: "2vw", height: "1.5vh" },
    { size: 60, width: "3vw", height: "2.3vh" },
    { size: 110, width: "4.1vw", height: "3vh" },
  ];

  // We cant set the h & w on Stage to 100% it only takes px values so we have to
  // find the parent container's w and h and then manually set those !
  useEffect(() => {
    if (divRef.current?.offsetHeight && divRef.current?.offsetWidth) {
      setDimensions({
        width: divRef.current.offsetWidth,
        height: divRef.current.offsetHeight,
      });
    }
  }, []);

  useEffect(() => {
    setPenColorVisible(true);
    setTool("pen");
    setPenColor("#000000");
    setIsSave([]);
  }, []);

  return (
    <>
      <Backdrop />
      <CalculatorComponentWrapper style={style}>
        {blankBoxVisible && (
          <DetailDrawBlankModalComponent
            onBlank={onBlankData}
            onClose={BlankClose}
          ></DetailDrawBlankModalComponent>
        )}
        <ToolContainer>
          <ColorCanvasBox>
            <ColorCanvastitle>
              {penColorVisible && <div>펜 색상 선택</div>}
              {eraserSizeVisible && <div>지우개 두께 선택</div>}
            </ColorCanvastitle>

            {penColorVisible && (
              <ColorCanvas>
                {colorArr.map((colorArr, i) => (
                  <ColorPicker
                    onClick={() => setPenColor(colorArr.color)}
                    key={i}
                    $bgColor={colorArr.color}
                  ></ColorPicker>
                ))}
              </ColorCanvas>
            )}
            {eraserSizeVisible && (
              <ColorCanvas>
                {eraserArr.map((eraser, i) => (
                  <SizePicker
                    onClick={() => setEraserSize(eraser.size)}
                    key={i}
                    $widthSize={eraser.width}
                    $heightSize={eraser.height}
                  ></SizePicker>
                ))}
              </ColorCanvas>
            )}
          </ColorCanvasBox>
          <CanvasToolBox>
            <CanvasTool>
              <DrawingPen
                onClick={() => selectPen()}
                height={"4vw"}
                fill={tool === "pen" ? "#FF7F3B" : "#AEAEAE"}
              />
              <EraserIcon
                onClick={() => selectEraser()}
                height={"4vw"}
                fill={tool === "eraser" ? "#FF7F3B" : "#AEAEAE"}
              />
              <BlankBoxIcon
                onClick={() => isBlank()}
                height={"4vw"}
                fill={"#AEAEAE"}
              />
            </CanvasTool>
          </CanvasToolBox>
          <CloseBox>
            <CloseIcon onClick={onClose} height={"2.3vw"} fill={"#AEAEAE"} />
          </CloseBox>
        </ToolContainer>
        <div
          onContextMenu={(e) => {
            e.preventDefault();
          }}
        >
          <CanvasPanel ref={divRef}>
            <Stage
              width={dimensions.width}
              height={dimensions.height}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onTouchStart={handleMouseDown}
              onTouchMove={handleMouseMove}
              onTouchEnd={handleMouseUp}
              ref={stageRef}
              stroke={""}
            >
              <Layer>
                {lines.map((line: any, i: any) => (
                  <Line
                    key={i}
                    points={line.points}
                    stroke={line.stroke}
                    strokeWidth={line.strokeWidth}
                    tension={0.8}
                    lineCap="round"
                    globalCompositeOperation={
                      line.tool === "eraser" ? "destination-out" : "source-over"
                    }
                  />
                ))}
              </Layer>
            </Stage>
          </CanvasPanel>
        </div>
      </CalculatorComponentWrapper>
    </>
  );
};

export default DetailDrawingPanelComponent;
