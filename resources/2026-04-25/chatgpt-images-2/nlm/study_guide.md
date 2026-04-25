# ChatGPT Images 2.0 (gpt-image-2) Study Guide

This study guide provides a comprehensive overview of OpenAI’s ChatGPT Images 2.0 release, covering the technical architecture, access modes, API implementation, and market positioning. It is designed for developers, architects, and AI researchers seeking to master the `gpt-image-2` model.

---

## 1. Core Concepts and Model Overview

### Introduction to gpt-image-2
Released on April 21, 2026, **gpt-image-2** is the successor to GPT Image 1.5 and the replacement for the DALL-E series. It is described as a "generalist model" or "GPT for images," moving away from traditional diffusion-only approaches toward an architecture with native reasoning capabilities.

### Key Capabilities
*   **Native Reasoning:** The first OpenAI image model with "thinking" capabilities, allowing it to plan layouts and verify its own output.
*   **Multi-Image Consistency:** Generates up to eight images from a single prompt while maintaining consistent characters, objects, and styles.
*   **Text Rendering Excellence:** Significant improvements in rendering complex, small, or dense text, including non-Latin scripts (Japanese, Korean, Chinese, Hindi, and Bengali).
*   **Resolution and Aspect Ratios:** Supports up to 2K resolution with flexible aspect ratios ranging from 3:1 (ultra-wide) to 1:3 (ultra-tall).
*   **Codex Integration:** Natively available within the Codex workspace, allowing developers to generate UI mockups and assets without switching tools.

### Operating Modes
The model operates in two primary tiers based on the user's subscription and requirement for reasoning:

| Feature | Instant Mode | Thinking Mode |
| :--- | :--- | :--- |
| **Availability** | All users (including Free) | Paid tiers (Plus, Pro, Business, Enterprise) |
| **Primary Strength** | Speed and core quality | Reasoning, layout planning, and consistency |
| **Multi-Image Batching** | Basic capability | High consistency (up to 8 images) |
| **Web Search** | Not available | Supported for real-time information |
| **Verification** | Single-pass generation | Self-checks and re-renders for accuracy |

---

## 2. Technical Specifications and API Integration

### API Parameters
Developers interacting with the `gpt-image-2` API utilize several key parameters to control output:

*   **Model:** `gpt-image-2` (replaces `dall-e-3`).
*   **Size:** Accepts any resolution where the max edge is < 3840px, both edges are multiples of 16, and total pixels are between 655,360 and 8,294,400.
*   **Quality:** Options include `low` (fastest/cheapest), `medium` (production-ready), and `high` (print-ready/highest detail).
*   **N:** Number of images (1 to 8). Requires Thinking mode for character continuity across the set.
*   **Output_format:** Supports `png`, `jpeg`, and `webp`.
*   **Output_compression:** A value from 0-100 to control file size for `jpeg` and `webp`.

### API Access Methods
1.  **Image API:** Best for single-turn generation or edits. Includes endpoints for `/generations` and `/edits`.
2.  **Responses API:** Best for conversational or multi-turn editing. Supports image generation as a tool and allows the model to decide whether to "generate" or "edit" based on context.

### Deprecation Schedule
OpenAI has announced a strict timeline for retiring legacy models to make way for the `gpt-image` series:
*   **DALL-E 2 and DALL-E 3:** Shut down on May 12, 2026.
*   **GPT Image 1:** Deprecated on October 23, 2026.

---

## 3. Pricing and Economics

The pricing for `gpt-image-2` marks a shift toward token-based billing for complex workflows, though per-image estimates are provided for standard resolutions.

### Token-Based Rates (Per 1 Million Tokens)
*   **Input Image:** $8.00
*   **Output Image:** $30.00
*   **Input Text:** $5.00
*   **Output Text:** $10.00

### Estimated Per-Image Cost (at 1024x1024)
| Quality Level | Estimated Cost |
| :--- | :--- |
| **Low** | $0.006 |
| **Medium** | $0.053 |
| **High** | $0.211 |

---

## 4. Short-Answer Practice Questions

1.  **What is the specific model name used in the API for ChatGPT Images 2.0?**
2.  **On what date is DALL-E 3 scheduled to be retired?**
3.  **Which specific subscriber tiers have access to "Thinking Mode"?**
4.  **What is the maximum number of coherent images that can be generated from a single prompt in Thinking Mode?**
5.  **List four non-Latin scripts that saw significant rendering improvements in this update.**
6.  **What is the knowledge cutoff date for gpt-image-2?**
7.  **Why are edit requests involving reference images billed at higher rates than standard generation?**
8.  **What is the maximum allowed ratio between the long edge and short edge for custom resolutions?**
9.  **How does the "Instant Mode" differ from "Thinking Mode" regarding latency?**
10. **In the Responses API, what does the `action` parameter control?**

---

## 5. Essay Prompts for Deeper Exploration

1.  **The "Visual Thought Partner" Paradigm:** Analyze OpenAI’s shift from marketing image models as "creative toys" to "visual thought partners." How does the introduction of native reasoning and web search support this new positioning for professional and enterprise workflows?
2.  **Competitive Landscape Comparison:** Compare `gpt-image-2` with its primary competitors, Midjourney v8 and Nano Banana 2. Discuss the trade-offs between aesthetic "compositional instincts," cost-per-image efficiency, and developer ecosystem integration.
3.  **Technical Constraints and Production Risks:** Despite the advancements, the model still has limitations such as the December 2025 knowledge cutoff and architectural opacity. Discuss how these limitations might impact high-stakes production environments, such as news organizations or brand-sensitive marketing agencies.
4.  **The Impact of Multi-Image Continuity:** Explore the implications of the "eight panels, one prompt" feature for sequential storytelling industries like manga, comics, and film storyboarding. How does this feature reduce friction compared to previous manual character-consistency techniques?

---

## 6. Glossary of Important Terms

*   **2K Resolution:** A resolution tier (up to 2560x1440) supported by `gpt-image-2`; resolutions exceeding this are currently considered experimental.
*   **Alpha Channel:** A component required for mask images in the `/edits` endpoint to identify areas of an image intended for modification.
*   **Codex:** OpenAI’s developer workspace where `gpt-image-2` is natively integrated to allow for seamless UI and asset prototyping.
*   **gpt-image-2:** The official model identifier for the ChatGPT Images 2.0 system within the OpenAI API.
*   **Input Fidelity:** A parameter (omitted in `gpt-image-2`) that traditionally controls how strongly a model preserves details from an input reference image.
*   **Instant Mode:** A high-speed generation tier available to all users that utilizes core quality improvements without the extended reasoning of Thinking Mode.
*   **Native Reasoning (Thinking Mode):** An architectural feature allowing the model to perform internal "planning" steps, search the web, and verify its own output against the prompt before delivery.
*   **Responses API:** A conversational API endpoint that enables multi-turn image editing and allows models to use image generation as a tool within a dialogue.
*   **Text Rendering:** The capability of an AI model to generate legible and correctly spelled alphanumeric characters within an image.
*   **Visual Continuity:** The ability of a model to maintain the appearance of specific characters, objects, or styles across multiple generated frames or images.