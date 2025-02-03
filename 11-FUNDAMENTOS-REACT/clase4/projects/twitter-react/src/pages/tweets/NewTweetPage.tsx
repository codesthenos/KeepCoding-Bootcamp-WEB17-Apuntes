import Layout from "../../components/layout/Layout";
import Button from "../../components/shared/Button";
import Photo from "../../components/shared/Photo";
import Textarea from "../../components/shared/Textarea";
import "./NewTweetPage.css";

const MAX_CHARACTERS = 140;

function NewTweetPage() {
  return (
    <Layout title="What are you thinking?">
      <div className="newTweetPage">
        <div>
          <Photo />
        </div>
        <form className="newTweetPage-form">
          <Textarea
            className="newTweetPage-textarea"
            placeholder="Hey! What's up!"
            maxLength={MAX_CHARACTERS}
          />
          <div className="newTweetPage-footer">
            <span className="newTweetPage-characters"></span>
            <Button
              type="submit"
              className="newTweetPage-submit"
              $variant="primary"
            >
              Let's go!
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default NewTweetPage;
