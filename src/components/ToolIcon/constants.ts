import { ToolType } from '@/types/tools';
import { ImageProps } from 'next/image';
import ConvertRegisterIcon from './img/convert-register.svg';
import DeleteDuplicateIcon from './img/delete-duplicate.svg';
import DuplicateWordsCounterIcon from './img/duplicate-words-counter.svg';
import FaqSchemaGeneratorIcon from './img/faq-schema-generator.svg';
import HtmlRedactor from './img/html-redactor.svg';
import LineCounterIcon from './img/line-counter.svg';
import OpenGraphGeneratorIcon from './img/open-graph-generator.svg';
import SynonymsIcon from './img/synonyms.svg';
import TextCounterIcon from './img/text-counter.svg';
import TransliterationIcon from './img/transliteration.svg';
import WordCombinerIcon from './img/word-combiner.svg';

export const TOOLS_ICONS: Record<ToolType, ImageProps['src']> = {
  transliteration: TransliterationIcon,
  textCounter: TextCounterIcon,
  htmlRedactor: HtmlRedactor,
  convertRegister: ConvertRegisterIcon,
  deleteDuplicate: DeleteDuplicateIcon,
  wordCombiner: WordCombinerIcon,
  lineCounter: LineCounterIcon,
  faqSchemaGenerator: FaqSchemaGeneratorIcon,
  duplicateWordsCounter: DuplicateWordsCounterIcon,
  synonyms: SynonymsIcon,
  openGraphGenerator: OpenGraphGeneratorIcon,
};
