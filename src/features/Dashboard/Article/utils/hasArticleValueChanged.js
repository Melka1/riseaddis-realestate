import { deepEqual } from "@/utils/checkEquality";

const hasArticleValueChanged = ({
  article,
  title,
  paragraphList,
  image,
  status,
}) => {
  if (
    deepEqual(article?.title, title) &&
    deepEqual(article?.paragraphs, paragraphList) &&
    deepEqual(article?.imageUrl, image || null) &&
    deepEqual(article?.status, status)
  ) {
    return false;
  }

  return true;
};

export default hasArticleValueChanged;
