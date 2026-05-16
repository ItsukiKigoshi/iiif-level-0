import { useEffect, useRef } from "preact/hooks";
import Image from "@samvera/clover-iiif/image";
// @ts-ignore
import Mirador from "mirador";
// @ts-ignore
import Tify from "tify";
import "tify/dist/tify.css";
import { init as initUV } from "universalviewer";
import 'universalviewer/dist/esm/index.css';

export function App() {
  const manifest = "/iiif/squirrel/manifest.json";

  const uvRef = useRef(null);

  useEffect(() => {
    Mirador.viewer({
      id: "mirador-container",
      windows: [
        {
          manifestId: manifest,
        },
      ],
    });

    new Tify({
      container: "#tify-container",
      manifestUrl: manifest,
    });

    if (uvRef.current) {
      initUV(uvRef.current, {
        manifest: manifest,
      });
    }
  }, []);

  return (
    <article style={{ padding: "20px" }}>
      <h1>Static IIIF (Level 0) with Viewers Comparison</h1>

      <section>
        <h2>1. Clover IIIF</h2>
        <div style={{ height: "500px" }}>
          <Image src="/iiif/squirrel" isTiledImage={true} />
        </div>
      </section>

      <section>
        <h2>2. Mirador</h2>
        <div
          id="mirador-container"
          style={{ position: "relative", height: "500px" }}
        />
      </section>

      <section>
        <h2>3. TIFY</h2>
        <div id="tify-container" style={{ height: "500px" }} />
      </section>

      <section>
        <h2>4. Universal Viewer</h2>
        <div
          ref={uvRef}
          className="uv"
          style={{ width: "100%", height: "600px", position: "relative" }}
        />
      </section>
    </article>
  );
}
