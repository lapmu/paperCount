import styled from "styled-components";

function App() {
  const runData: string[][] = [
    ["", "", ""],
    ["NN", "4B2P", "4B"],
    ["HH", "3B1P", "2B4P"],
    ["LL", "3B1P", "2B4P"],
    ["ALL", "10B4P", "9B3P"],
    ["K", "27K", "12K"],
  ];

  const pqData: string[][] = [
    ["", "", ""],
    ["NN", "2p", "2p"],
    ["HH", "1p", "1P"],
    ["LL", "1P", "1P"],
    ["ALL", "4P", "4P"],
    ["K", "2K", "1.5K"],
  ];

  const spacialData: string[][] = [
    ["", "", ""],
    ["springhill (163g)", "6p", "4p", "4p", "2.1K"],
    ["springhill (199g)", "10p", "7p", "7p", "3.6K"],
    ["B5_S.S", "3p", "2p", "2p", "3.5K"],
    ["A5_S.S", "3p", "2p", "2p", "3.5K"],
    ["A3_D.A", "3p", "2p", "2p", "3.5K"],
    ["hammermill (105g)", "3p", "2p", "2p", "3.5K"],
    ["Glossy (150g)", "1p", "1p", "1p", "0.8K"],
    ["Matte (150g)", "1p", "1p", "1p", "0.8K"],
    ["NO.10", "60", "40", "40", "0.3K"],
    ["Mornach", "60", "40", "40", "0.3K"],
    ["DL", "60", "40", "40", "0.3K"],
    ["C5", "66", "44", "44", "0.3K"],
    ["4X6 (150g)", "240", "160", "160", "0.6K"],
    ["AnyLabel", "8p", "5p", "5p", "1.8K"],
    ["LGR_Xerox", "3p", "2p", "2p", "3.5K"],
    ["5X8 (150g)", "240", "160", "160", "0.6K"],
    ["B4_S.S", "5p", "3p", "3p", "5.5K"],
  ];

  return (
    <Warp>
      <Title>Heros Paper Counting</Title>
      <SubTitle>PQ</SubTitle>
      {pqData.map((el) => {
        if (!el[0]) {
          el[1] = "A4/LTR";
          el[2] = "A3/LGR";
        }
        return (
          <TableContainer>
            <div>{el[0]}</div>
            <div>{el[1]}</div>
            <div>{el[2]}</div>
          </TableContainer>
        );
      })}
      <SubTitle>Run</SubTitle>
      {runData.map((el) => {
        if (!el[0]) {
          el[1] = "A4/LTR";
          el[2] = "A3/LGR";
        }
        return (
          <TableContainer>
            <div>{el[0]}</div>
            <div>{el[1]}</div>
            <div>{el[2]}</div>
          </TableContainer>
        );
      })}
      <SubTitle>Special</SubTitle>
      {spacialData.map((el) => {
        if (!el[0]) {
          el[1] = "NN";
          el[2] = "HH";
          el[3] = "LL";
          el[4] = "K";
        }
        return (
          <TableContainer>
            <SpcialPaper>{el[0]}</SpcialPaper>
            <div>{el[1]}</div>
            <div>{el[2]}</div>
            <div>{el[3]}</div>
            <div>{el[4]}</div>
          </TableContainer>
        );
      })}
    </Warp>
  );
}

export default App;
const Warp = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  padding: 20px 0px 0px 0px;
`;

const SubTitle = styled.div`
  font-size: 15px;
  font-weight: 700;
  width: 80%;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  margin-top: 30px;
  padding: 10px 0px 20px 0px;
`;

const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  border: 1px solid black;
  border-top: none;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }
`;

const SpcialPaper = styled.div`
  width: 33%;
  text-align: center;
  font-size: 10px;
  white-space: normal;
`;
