import { useMemo } from "react";
import { resolve } from "url";
import Link from "next/link";

const BaseLink = ({ href, as, ...rest }) => {
  const newAs = useMemo(() => {
    let baseURI_as = as || href;

    if (baseURI_as.startsWith("/")) {
      baseURI_as = "." + href;

      if (typeof document !== "undefined") {
        baseURI_as = resolve(document.baseURI, baseURI_as);
      }
    }
    return baseURI_as;
  }, [as, href]);
  return <Link {...rest} href={href} as={newAs} />;
};

export default BaseLink;
