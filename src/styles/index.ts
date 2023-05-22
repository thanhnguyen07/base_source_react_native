import flex from './flex';
import spacing from './spacing';
import text from './text';

export {default as flex} from './flex';
export {default as spacing} from './spacing';
export {default as text} from './text';
const styles = {
    ...flex,
    ...spacing,
    ...text,
};

export default styles;
