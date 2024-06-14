import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const App = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = () => {
    socket.emit('message', message);
    setMessage('');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Mouse Code Chat</Text>
      <ScrollView>
        {messages.map((msg, index) => (
          <Text key={index}>{msg}</Text>
        ))}
      </ScrollView>
      <TextInput
        value={message}
        onChangeText={setMessage}
        style={{ borderColor: 'gray', borderWidth: 1, marginVertical: 10 }}
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
};

export default App;
