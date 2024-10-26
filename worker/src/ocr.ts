import Tesseract from 'tesseract.js';

export async function performOCR(imagePath: string): Promise<string> {
    try {
        const { data: { text } } = await Tesseract.recognize(
            imagePath,
            'eng',
            {
                logger: m => console.log(m)
            }
        );
        return text;
    } catch (error) {
        console.error('Error performing OCR:', error);
        throw error;
    }
}
