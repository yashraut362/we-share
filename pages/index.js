import EmailContextProvider from "../context/EmailContext.js";
import FileContextProvider from "../context/FileContext.js";
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
