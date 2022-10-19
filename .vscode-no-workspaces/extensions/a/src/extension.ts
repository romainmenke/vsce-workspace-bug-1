import * as vscode from 'vscode';

export const log = vscode.window.createOutputChannel('Extension');

export function deactivate() {
	log.appendLine('deactivate A');
}

export function activate(context: vscode.ExtensionContext): void {
	log.appendLine('activate A');
}
