// src/pages/BlogPost.tsx
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type Block =
  | { type: "paragraph"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] };

// превращаем массив строк в блоки: абзацы, заголовки, списки
const buildBlocks = (content: string[]): Block[] => {
  const blocks: Block[] = [];
  let currentList: string[] | null = null;

  const flushList = () => {
	if (currentList && currentList.length) {
	  blocks.push({ type: "list", items: currentList });
	  currentList = null;
	}
  };

  for (const raw of content) {
	const line = raw.trim();
	if (!line) {
	  flushList();
	  continue;
	}

	// markdown-заголовки, если вдруг появятся
	if (line.startsWith("## ")) {
	  flushList();
	  blocks.push({ type: "h2", text: line.slice(3) });
	  continue;
	}
	if (line.startsWith("### ")) {
	  flushList();
	  blocks.push({ type: "h3", text: line.slice(4) });
	  continue;
	}

	// Вопросительные строки типа
	// "Why do players prefer no-KYC casinos?"
	if (line.endsWith("?") && line.length < 140) {
	  flushList();
	  blocks.push({ type: "h3", text: line });
	  continue;
	}

	// "Conclusion" как отдельный блок
	if (/^Conclusion\b/i.test(line)) {
	  flushList();
	  blocks.push({ type: "h2", text: line });
	  continue;
	}

	// Элементы списка: "1. ...", "- ...", "• ...", "✔ ..."
	const listMatch = line.match(/^(\d+\.\s+|[-•✔]\s+)/);
	if (listMatch) {
	  const itemText = line.slice(listMatch[0].length);
	  if (!currentList) currentList = [];
	  currentList.push(itemText);
	  continue;
	}

	// Обычный абзац
	flushList();
	blocks.push({ type: "paragraph", text: line });
  }

  flushList();
  return blocks;
};

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
	return (
	  <div className="min-h-screen bg-background text-foreground">
		<Navigation />
		<main className="pt-24 pb-16 container mx-auto px-4 sm:px-6 lg:px-8">
		  <p className="text-sm text-muted-foreground mb-4">
			<Link to="/blog" className="hover:text-primary">
			  ← Back to blog
			</Link>
		  </p>
		  <h1 className="text-3xl sm:text-4xl font-bold mb-4">
			Article not found
		  </h1>
		  <p className="text-muted-foreground">
			The article you are looking for doesn&apos;t exist or was moved.
		  </p>
		</main>
		<Footer />
	  </div>
	);
  }

  const blocks = buildBlocks(post.content);

  return (
	<div className="min-h-screen bg-background text-foreground">
	  <Navigation />

	  <main className="pt-24 pb-16">
		<article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
		  <p className="text-sm text-muted-foreground mb-4">
			<Link to="/blog" className="hover:text-primary">
			  ← Back to blog
			</Link>
		  </p>

		  <header className="mb-8">
			<div className="inline-flex items-center rounded-full bg-primary/10 border border-primary/40 px-3 py-1 text-[10px] uppercase tracking-[0.26em] text-primary mb-3">
			  {post.tag}
			</div>
			<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
			  {post.title}
			</h1>
			<div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-muted-foreground">
			  <span>{post.author}</span>
			  <span>•</span>
			  <span>{post.readTime}</span>
			  <span>•</span>
			  <span>{post.date}</span>
			</div>
		  </header>

		  {/* картинка/градиент */}
		  <div className="mb-10 rounded-3xl overflow-hidden border border-border/80 bg-card/80">
			<div
			  className="h-56 sm:h-72 bg-cover bg-center"
			  style={{
				backgroundImage: post.imageUrl
				  ? `url(${post.imageUrl})`
				  : "radial-gradient(circle at 0 0, rgba(250,204,21,0.4), transparent 55%), radial-gradient(circle at 100% 100%, rgba(234,179,8,0.25), transparent 55%), linear-gradient(135deg, #020617, #020617)",
			  }}
			/>
		  </div>

		  {/* контент: нормальные отступы, заголовки, списки */}
		  <div className="max-w-none text-sm sm:text-base leading-relaxed">
			{blocks.map((block, idx) => {
			  if (block.type === "paragraph") {
				return (
				  <p
					key={idx}
					className="mb-4 text-muted-foreground"
				  >
					{block.text}
				  </p>
				);
			  }

			  if (block.type === "h2") {
				return (
				  <h2
					key={idx}
					className="mt-10 mb-4 text-2xl sm:text-3xl font-semibold text-foreground"
				  >
					{block.text}
				  </h2>
				);
			  }

			  if (block.type === "h3") {
				return (
				  <h3
					key={idx}
					className="mt-8 mb-3 text-xl font-semibold text-foreground"
				  >
					{block.text}
				  </h3>
				);
			  }

			  if (block.type === "list") {
				return (
				  <ul
					key={idx}
					className="mb-5 ml-5 list-disc space-y-1 text-muted-foreground"
				  >
					{block.items.map((item, liIdx) => (
					  <li key={liIdx}>{item}</li>
					))}
				  </ul>
				);
			  }

			  return null;
			})}
		  </div>
		</article>
	  </main>

	  <Footer />
	</div>
  );
};

export default BlogPostPage;