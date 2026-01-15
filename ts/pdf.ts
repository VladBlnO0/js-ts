/**
 * Deno with Python: Generating a PDF using fpdf2
 *
 * https://github.com/denosaurs/deno_python
 * https://pypi.org/project/fpdf2/
 */

import { python, kw } from "jsr:@denosaurs/python";

const fpdf = python.import("fpdf");
const FPDF = fpdf.FPDF;

const pdf = FPDF(kw`orientation=${"P"}`, kw`unit=${"mm"}`, kw`format=${"A4"}`);

pdf.add_font(
  "dejavu-sans",
  kw`style=${""}`,
  kw`fname=${"./DejaVuSans.ttf"}`,
  kw`uni=${true}`
);
pdf.set_font("dejavu-sans", "", 14);

pdf.add_page();

pdf.set_text_color(255, 255, 255);
pdf.set_fill_color(39, 111, 179);

pdf.cell(
  0,
  10,
  "Title of the Document",
  kw`ln=${true}`,
  kw`align=${"C"}`,
  kw`fill=${true}`
);

pdf.ln(8);

pdf.set_text_color(0, 0, 0);
pdf.cell(0, 10, "Text", kw`ln=${true}`, kw`align=${"C"}`);
pdf.ln(20);

pdf.set_text_color(0, 0, 0);

const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";
pdf.multi_cell(0, 8, paragraph, kw`align=${"J"}`);

pdf.set_y(-10);
pdf.cell(0, 10, `${pdf.page_no()}`, kw`align=${"R"}`);

pdf.ln(15);

const paragraph1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";
pdf.multi_cell(0, 8, paragraph1, kw`align=${"J"}`);

pdf.output("my_pdf.pdf");
