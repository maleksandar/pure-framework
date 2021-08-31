import { FunctionalElement } from "./functionalElement";

class HTMLParser implements FunctionalElement {
  render(){
    let parser = new DOMParser();
    let htmlDoc = parser.parseFromString(this.htmlText, 'text/html');
    this.domElement = htmlDoc.body;
    return htmlDoc.body.firstChild as unknown as HTMLElement;
  }
  domElement: HTMLElement | Text;
  children?: FunctionalElement[];
  parentDomElement: HTMLElement;

  /**
   *
   */
  constructor(private htmlText) {
    
  }
}

export const html = (htmlText) => new HTMLParser(htmlText);