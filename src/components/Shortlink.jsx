import React, { useState, useEffect } from "react";

// sessionStorage without expiry
function saveToSessionStorage(key, value) {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
    console.log(`Saved to sessionStorage key="${key}":`, value);
  } catch (error) {
    console.error("Error saving to sessionStorage:", error);
  }
}

function getFromSessionStorage(key) {
  const itemStr = sessionStorage.getItem(key);
  if (!itemStr) {
    console.log(`No sessionStorage item found for key="${key}"`);
    return null;
  }
  try {
    const parsed = JSON.parse(itemStr);
    console.log(`Loaded from sessionStorage key="${key}":`, parsed);
    return parsed;
  } catch (error) {
    console.error("Error parsing sessionStorage item:", error);
    sessionStorage.removeItem(key);
    return null;
  }
}

const Shortlink = () => {
  const [url, setUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [shortenurls, setShortenUrls] = useState([]);
  const [copiedIndex, setCopiedIndex] = useState(null);

  // Load stored URLs on mount
  useEffect(() => {
    const savedUrls = getFromSessionStorage("shortenurls");
    if (savedUrls) setShortenUrls(savedUrls);
  }, []);

  // Debug: Log shortenurls state whenever it changes
  useEffect(() => {
    console.log("Current shortenurls state:", shortenurls);
  }, [shortenurls]);

  // Save URLs on update (only if array is not empty)
  useEffect(() => {
    if (shortenurls.length > 0) {
      saveToSessionStorage("shortenurls", shortenurls);
    } else {
      sessionStorage.removeItem("shortenurls");
      console.log(
        "Removed shortenurls from sessionStorage because list is empty"
      );
    }
  }, [shortenurls]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!url.trim()) {
      setErrorMessage("Please add a link");
      return;
    }

    try {
      const response = await fetch(
        `https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`
      );

      const shortUrl = await response.text();

      if (response.ok && shortUrl.startsWith("http")) {
        setShortenUrls((prev) => [
          ...prev,
          {
            originalurl: url,
            shorturl: shortUrl,
          },
        ]);
        setErrorMessage("");
        setUrl("");
      } else {
        setErrorMessage("Failed to shorten URL. Try again.");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Network error. Please try again.");
    }
  };

  const handleCopy = (shortUrl, index) => {
    navigator.clipboard.writeText(shortUrl).then(() => {
      setCopiedIndex(index);
      setTimeout(() => {
        setCopiedIndex(null);
      }, 2000);
    });
  };

  return (
    <section className="flex items-center justify-center translate-y-[-5rem] max-w-[1000px] mx-auto">
      <div className="w-[90%] md:w-[90%]">
        <div className="bg-purple-950 py-[2rem] shorten-bg px-[1rem] md:px-[3rem] bg-no-repeat bg-center bg-cover w-full rounded-lg mb-[2rem]">
          <form
            className="flex flex-col md:flex-row md:gap-5"
            onSubmit={handleSubmit}
          >
            <div className="mb-5 w-full relative">
              <input
                type="text"
                placeholder="Shorten a link here..."
                value={url}
                className={`bg-white px-2 h-[45px] w-full rounded border transition-colors duration-200 ${
                  errorMessage
                    ? "border-red-500 placeholder:text-red-500 border-2 focus:ring-red-500"
                    : ""
                }`}
                onChange={(e) => setUrl(e.target.value)}
              />
              {errorMessage && (
                <p className="text-red-400 absolute text-sm left-2 top-[105%]">
                  {errorMessage}
                </p>
              )}
            </div>
            <button className="bg-cyan-400 hover:bg-cyan-200 w-full md:w-[10rem] text-white h-[45px] rounded-xl cursor-pointer">
              Shorten it!
            </button>
          </form>
        </div>

        {/* shorten link results */}
        {shortenurls.length > 0 &&
          shortenurls.map((item, index) => (
            <div
              className="flex flex-col md:flex-row gap-3 md:justify-between bg-white py-3 rounded-md md:items-center mb-4 px-4"
              key={index}
            >
              <span className="mb-4 md:mb-0 border-b md:border-0 border-gray-300 pb-3 md:pb-0 break-all">
                {item.originalurl}
              </span>
              <div className="flex flex-col md:flex-row md:items-center gap-2 w-full md:w-auto">
                <a
                  href={item.shorturl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 break-all"
                >
                  {item.shorturl}
                </a>
                <button
                  className={`h-[35px] rounded-lg px-6 md:px-5 w-full md:w-auto cursor-pointer ${
                    copiedIndex === index
                      ? "bg-gray-950 text-white"
                      : "bg-cyan-400 text-white"
                  }`}
                  onClick={() => handleCopy(item.shorturl, index)}
                  disabled={copiedIndex === index}
                >
                  {copiedIndex === index ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Shortlink;
