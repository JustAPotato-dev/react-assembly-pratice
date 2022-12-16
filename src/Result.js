import { Text } from '@chakra-ui/react';
import Hightlighted from './Hightlighted';
import Topic from './Topic';

export default function Result({ transcript }) {
  return (
    <div>
      <Text>
        {transcript.sentiment_analysis_results.map(result => (
          <Hightlighted
            text={result.text}
            sentiment={result.sentiment}
            entities={transcript.entities}
          ></Hightlighted>
        ))}
      </Text>
      <Topic transcript={transcript} />
    </div>
  );
}
