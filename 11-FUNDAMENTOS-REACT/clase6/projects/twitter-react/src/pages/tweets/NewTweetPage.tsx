import { useEffect, useRef, useState, memo, useMemo, useCallback } from "react";
import Page from "../../components/layout/Page";
import Button from "../../components/shared/Button";
import Photo from "../../components/shared/Photo";
import Textarea from "../../components/shared/Textarea";
import "./NewTweetPage.css";
import Fibonacci from "../../components/Fibonacci";
import { createTweet } from "./service";
import { useNavigate } from "react-router-dom";
import { isApiClientError } from "../../api/client";

const MAX_CHARACTERS = 140;
const MIN_CHARACTERS = 5;

const MemoizedFibonacci = memo(Fibonacci);

function NewTweetPageForm() {
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    console.log("button", buttonRef.current);
    // buttonRef.current?.focus();
    textAreaRef.current?.focus();
  }, []);

  const progress = `${content.length} / ${MAX_CHARACTERS}`;
  const buttonDisabled = content.length < MIN_CHARACTERS;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const createdTweet = await createTweet({ content });
      navigate(`/tweets/${createdTweet.id}`);
    } catch (error) {
      if (isApiClientError(error)) {
        if (error.code === "UNAUTHORIZED") {
          navigate("/login");
        }
      }
      console.log(error);
    }
  };

  return (
    <form className="newTweetPage-form" onSubmit={handleSubmit}>
      <Textarea
        className="newTweetPage-textarea"
        placeholder="Hey! What's up!"
        maxLength={MAX_CHARACTERS}
        value={content}
        onChange={(event) => {
          setContent(event.target.value);
        }}
        ref={textAreaRef}
      />
      <div className="newTweetPage-footer">
        <span className="newTweetPage-characters">{progress}</span>
        <Button
          type="submit"
          className="newTweetPage-submit"
          $variant="primary"
          ref={buttonRef}
          disabled={buttonDisabled}
        >
          Let's go!
        </Button>
      </div>
    </form>
  );
}

function NewTweetPage() {
  const renders = useRef(0);

  // console.log("renders", renders, content);

  renders.current++;

  // const someObject = useMemo(() => {
  //   return {};
  // }, []);
  const someObject = {};

  // const someFunction = useCallback(() => {
  // }, []);
  const someFunction = () => {};

  return (
    <Page title="What is happening?!">
      <div className="newTweetPage">
        <div>
          <Photo />
        </div>
        <NewTweetPageForm />
      </div>
      <Fibonacci
        value={5}
        someObject={someObject}
        someFunction={someFunction}
      />
    </Page>
  );
}

export default NewTweetPage;
