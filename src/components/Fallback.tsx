import styled from "styled-components";
import { useGlobalContext } from "../context/GlobalContext";

const Overlay = styled.div`
  position: absolute;
  left: 0;
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: #fff;
`;

const TextLoading = styled.p`
  color: gray;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  opacity: 1;
  margin-bottom: 35px;
`;

const EfectCardContainer = styled.div`
  padding: 16px;
  border: 0.0625rem solid rgba(0, 0, 0, 0.125);
  background: #ffffff;
`;

const CardLoading = styled(EfectCardContainer)`
  padding: 30px;
  margin-top: 5rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 10px;
`;

type Props = {
  text?: string;
};

const Fallback = ({text}: Props) => {
  const { language } = useGlobalContext();

  return (
    <div style={{ minHeight: "80vh" }}>
      <Overlay>
        <CardLoading>
          <img
            src={
              "https://cdn.discordapp.com/attachments/730086912391643227/1072671292483965078/programmer.png"
            }
            height={120}
            alt=""
          />
          <TextLoading>
            {text ? text : language === "ENG" ? "Loading..." : "Carregando..."}
          </TextLoading>
        </CardLoading>
      </Overlay>
    </div>
  );
};

export default Fallback;
