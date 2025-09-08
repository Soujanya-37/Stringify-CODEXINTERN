const { useState, useCallback, useEffect } = React;

function RandomStringGenerator() {
    // useState hooks for state management
    const [generatedString, setGeneratedString] = useState('');
    const [stringLength, setStringLength] = useState(12);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(false);
    const [autoGenerate, setAutoGenerate] = useState(false);
    const [history, setHistory] = useState([]);
    const [copied, setCopied] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);

    // Character sets
    const charSets = {
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        numbers: '0123456789',
        symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
    };

    // useCallback for optimized string generation
    const generateRandomString = useCallback(() => {
        let charset = '';
        
        if (includeUppercase) charset += charSets.uppercase;
        if (includeLowercase) charset += charSets.lowercase;
        if (includeNumbers) charset += charSets.numbers;
        if (includeSymbols) charset += charSets.symbols;

        if (charset === '') {
            setGeneratedString('Please select at least one character type');
            return;
        }

        setIsGenerating(true);
        
        // Simulate generation delay for better UX
        setTimeout(() => {
            let result = '';
            for (let i = 0; i < stringLength; i++) {
                result += charset.charAt(Math.floor(Math.random() * charset.length));
            }
            
            setGeneratedString(result);
            
            // Add to history
            const newEntry = {
                id: Date.now(),
                string: result,
                timestamp: new Date().toLocaleTimeString(),
                length: stringLength,
                types: {
                    uppercase: includeUppercase,
                    lowercase: includeLowercase,
                    numbers: includeNumbers,
                    symbols: includeSymbols
                }
            };
            
            setHistory(prev => [newEntry, ...prev.slice(0, 9)]); // Keep last 10
            setIsGenerating(false);
        }, 200);
    }, [stringLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

    // useCallback for copy functionality
    const copyToClipboard = useCallback(async (text = generatedString) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    }, [generatedString]);

    // useCallback for keyboard shortcuts
    const handleKeyPress = useCallback((event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            generateRandomString();
        } else if (event.ctrlKey && event.key === 'c' && generatedString) {
            event.preventDefault();
            copyToClipboard();
        }
    }, [generateRandomString, copyToClipboard, generatedString]);

    // useEffect for keyboard event listeners
    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);

    // useEffect for auto-generation
    useEffect(() => {
        let interval;
        if (autoGenerate) {
            interval = setInterval(() => {
                generateRandomString();
            }, 3000);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [autoGenerate, generateRandomString]);

    // useEffect for initial generation
    useEffect(() => {
        generateRandomString();
    }, []);

    return (
        <div className="min-h-screen p-6 flex items-center justify-center">
            <div className="max-w-4xl w-full">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white mb-2 text-responsive">🎲 Random String Generator</h1>
                    <p className="text-white/80">Generate secure random strings with customizable options</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6 grid-responsive">
                    {/* Main Generator */}
                    <div className="lg:col-span-2">
                        <div className="glass-effect rounded-2xl p-6 shadow-xl">
                            {/* Generated String Display */}
                            <div className="mb-6">
                                <label className="block text-white font-medium mb-3">Generated String:</label>
                                <div className="relative">
                                    <div className={`bg-gray-900 rounded-lg p-4 border-2 transition-all duration-300 ${
                                        isGenerating ? 'border-blue-400 animate-pulse-slow generating' : 'border-gray-700'
                                    }`}>
                                        <code className="text-green-400 text-lg font-mono break-all">
                                            {isGenerating ? 'Generating...' : generatedString || 'Click generate to create a string'}
                                        </code>
                                    </div>
                                    {generatedString && !isGenerating && (
                                        <button
                                            onClick={() => copyToClipboard()}
                                            className={`absolute top-2 right-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm copy-btn ${copied ? 'copied' : ''}`}
                                        >
                                            {copied ? '✓ Copied!' : '📋 Copy'}
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Controls */}
                            <div className="space-y-6">
                                {/* Length Slider */}
                                <div>
                                    <label className="block text-white font-medium mb-2">
                                        Length: <span className="text-blue-300">{stringLength}</span>
                                    </label>
                                    <input
                                        type="range"
                                        min="4"
                                        max="50"
                                        value={stringLength}
                                        onChange={(e) => setStringLength(parseInt(e.target.value))}
                                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                                    />
                                    <div className="flex justify-between text-sm text-white/60 mt-1">
                                        <span>4</span>
                                        <span>50</span>
                                    </div>
                                </div>

                                {/* Character Type Toggles */}
                                <div>
                                    <label className="block text-white font-medium mb-3">Character Types:</label>
                                    <div className="grid grid-cols-2 gap-3">
                                        <label className="flex items-center space-x-3 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={includeUppercase}
                                                onChange={(e) => setIncludeUppercase(e.target.checked)}
                                                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                                            />
                                            <span className="text-white">Uppercase (A-Z)</span>
                                        </label>
                                        <label className="flex items-center space-x-3 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={includeLowercase}
                                                onChange={(e) => setIncludeLowercase(e.target.checked)}
                                                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                                            />
                                            <span className="text-white">Lowercase (a-z)</span>
                                        </label>
                                        <label className="flex items-center space-x-3 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={includeNumbers}
                                                onChange={(e) => setIncludeNumbers(e.target.checked)}
                                                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                                            />
                                            <span className="text-white">Numbers (0-9)</span>
                                        </label>
                                        <label className="flex items-center space-x-3 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={includeSymbols}
                                                onChange={(e) => setIncludeSymbols(e.target.checked)}
                                                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                                            />
                                            <span className="text-white">Symbols (!@#$)</span>
                                        </label>
                                    </div>
                                </div>

                                {/* Auto Generate Toggle */}
                                <div>
                                    <label className="flex items-center space-x-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={autoGenerate}
                                            onChange={(e) => setAutoGenerate(e.target.checked)}
                                            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                                        />
                                        <span className="text-white">Auto-generate every 3 seconds</span>
                                    </label>
                                </div>

                                {/* Generate Button */}
                                <button
                                    onClick={generateRandomString}
                                    disabled={isGenerating}
                                    className="w-full generate-btn text-white font-bold py-4 px-6 rounded-xl"
                                >
                                    {isGenerating ? '🎲 Generating...' : '🎲 Generate New String'}
                                </button>

                                <p className="text-center text-white/60 text-sm">
                                    Press <kbd>Enter</kbd> or <kbd>Space</kbd> to generate • <kbd>Ctrl+C</kbd> to copy
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* History Panel */}
                    <div className="lg:col-span-1">
                        <div className="glass-effect rounded-2xl p-6 shadow-xl">
                            <h3 className="text-white font-bold text-lg mb-4 flex items-center">
                                📜 Recent History
                                {history.length > 0 && (
                                    <span className="ml-2 bg-blue-600 text-xs px-2 py-1 rounded-full">
                                        {history.length}
                                    </span>
                                )}
                            </h3>
                            
                            {history.length === 0 ? (
                                <p className="text-white/60 text-center py-8">
                                    No strings generated yet
                                </p>
                            ) : (
                                <div className="space-y-3 max-h-96 overflow-y-auto history-scroll">
                                    {history.map((entry) => (
                                        <div
                                            key={entry.id}
                                            className="bg-gray-900/50 rounded-lg p-3 history-entry"
                                        >
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="text-xs text-white/60">{entry.timestamp}</span>
                                                <button
                                                    onClick={() => copyToClipboard(entry.string)}
                                                    className="text-blue-400 hover:text-blue-300 text-xs"
                                                >
                                                    📋
                                                </button>
                                            </div>
                                            <code className="text-green-400 text-sm font-mono break-all block mb-2">
                                                {entry.string}
                                            </code>
                                            <div className="flex flex-wrap gap-1">
                                                <span className="char-badge char-badge-length">
                                                    {entry.length} chars
                                                </span>
                                                {entry.types.uppercase && (
                                                    <span className="char-badge char-badge-uppercase">A-Z</span>
                                                )}
                                                {entry.types.lowercase && (
                                                    <span className="char-badge char-badge-lowercase">a-z</span>
                                                )}
                                                {entry.types.numbers && (
                                                    <span className="char-badge char-badge-numbers">0-9</span>
                                                )}
                                                {entry.types.symbols && (
                                                    <span className="char-badge char-badge-symbols">!@#</span>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            
                            {history.length > 0 && (
                                <button
                                    onClick={() => setHistory([])}
                                    className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg text-sm transition-colors duration-200"
                                >
                                    Clear History
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Render the application
ReactDOM.render(<RandomStringGenerator />, document.getElementById('root'));

