// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
const vscode = require('vscode');
const fs = require('fs');
const path = require('path');
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "testytest" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.learnPython', function () {
		const introduction = `<WELCOME, YOU ARE JUST GOING TO LEARN THE BASICS OF PYTHON>
		<The way you can display a message on the console is in this sintaxys:>
		<print ("Your message here")>
		<you can print the number of quotes you want just pressing the run button>
		<The == operator (equal to) asks whether two values are the same as each other>
		<type:>
		<if name =="Alice"
			print ("Hi, Alice ")
		 elif
			 print ("You are not Alice, kiddo")>
			 <check what happens>`
			 ;
		
		
		
		
		vscode.window.showInformationMessage('Learning Python from 0');
		const folderPath = vscode.workspace.workspaceFolders[0].uri
			.toString()
			.split(":")[1];

		fs.writeFile(path.join(folderPath, "index.html"),introduction, err => {
			if(err){
				console.error(err);
				return vscode.window.showErrorMessage(
				"Failed to create boilerplate Python file"
				);
			}
			vscode.window.showInformationMessage("Created boilerplate file");
		} );
	}
	);
context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
