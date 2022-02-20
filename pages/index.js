import EmailContextProvider from "../context/EmailContext";
import FileContextProvider from "../context/FileContext";
import Sharecard from "../components/Sharecard.js";

export default function Home() {
  return (
    <div>
      <FileContextProvider>
        <EmailContextProvider>
          <Sharecard />
        </EmailContextProvider>
      </FileContextProvider>
    </div>
  );
}
