#include <iostream>
#include <map>

using namespace std;

// Function to display the quiz question and options
void displayQuestion(const string& question, const map<char, string>& options) {
    cout << question << endl;
    for (auto& option : options) {
        cout << option.first << ") " << option.second << endl;
    }
}

int main() {
    // Map to store questions and their options
    map<string, map<char, string>> quiz;

    // Add questions and options
    quiz["What is the capital of France?"] = {
        {'A', "London"},
        {'B', "Paris"},
        {'C', "Berlin"},
        {'D', "Rome"}
    };

    quiz["Who wrote 'Romeo and Juliet'?"] = {
        {'A', "William Shakespeare"},
        {'B', "Charles Dickens"},
        {'C', "Jane Austen"},
        {'D', "Leo Tolstoy"}
    };

    // Iterate through each question in the quiz
    for (auto& question : quiz) {
        // Display the question and options
        displayQuestion(question.first, question.second);

        // Ask for user input
        char answer;
        cout << "Your answer: ";
        cin >> answer;

        // Check if the answer is correct
        if (toupper(answer) == 'B') {
            cout << "Correct!" << endl;
        } else {
            cout << "Incorrect!" << endl;
        }
        cout << endl;
    }

    return 0;
}
