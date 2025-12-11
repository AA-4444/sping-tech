// src/pages/Blog.tsx
import { useMemo, useState } from "react";
import { blogPosts, BlogCategory } from "@/data/blogPosts";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const categoryTabs: { id: BlogCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "articles", label: "Articles" },
  { id: "platform-updates", label: "Platform updates" },
  { id: "news", label: "News" },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("all");

  const filteredPosts = useMemo(() => {
	if (activeCategory === "all") return blogPosts;
	return blogPosts.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const featured = filteredPosts.find((p) => p.featured) ?? filteredPosts[0];
  const others = filteredPosts.filter((p) => p.id !== featured?.id);

  return (
	<div className="min-h-screen bg-background text-foreground">
	  <Navigation />

	  <main className="pt-24 pb-16">
		<section className="container mx-auto px-4 sm:px-6 lg:px-8">
		  {/* Заголовок */}
		  <header className="mb-10 sm:mb-12">
			<p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-primary/80 mb-2">
			  Resources
			</p>
			<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
			  <div>
				<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
				  Sping.tech <span className="text-primary">Blog</span>
				</h1>
				<p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl">
				  Insights, release notes and ideas on building high-load casino
				  and crypto platforms.
				</p>
			  </div>

			  {/* табы категорий */}
			  <div className="sm:self-end">
				<div className="inline-flex gap-2 rounded-full bg-card/60 border border-border/70 px-1 py-1 overflow-x-auto max-w-full">
				  {categoryTabs.map((tab) => (
					<button
					  key={tab.id}
					  onClick={() => setActiveCategory(tab.id)}
					  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm whitespace-nowrap transition-all ${
						activeCategory === tab.id
						  ? "bg-primary text-primary-foreground shadow-[0_0_24px_hsl(var(--primary)/0.35)]"
						  : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
					  }`}
					>
					  {tab.label}
					</button>
				  ))}
				</div>
			  </div>
			</div>
		  </header>

		  {/* Сетка постов */}
		  <div className="grid gap-6 lg:grid-cols-3 auto-rows-fr">
			{/* Крупная карточка слева */}
			{featured && (
			  <ArticleCard
				post={featured}
				variant="featured"
				className="lg:col-span-2"
			  />
			)}

			{/* Остальные */}
			{others.map((post) => (
			  <ArticleCard key={post.id} post={post} />
			))}

			{filteredPosts.length === 0 && (
			  <div className="col-span-full text-center text-muted-foreground py-12">
				No posts in this category yet.
			  </div>
			)}
		  </div>
		</section>
	  </main>

	  {/* Footer */}
	<Footer />
	</div>
  );
};

export default Blog;

type ArticleCardProps = {
  post: (typeof blogPosts)[number];
  variant?: "default" | "featured";
  className?: string;
};

import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const ArticleCard = ({ post, variant = "default", className }: ArticleCardProps) => {
  const isFeatured = variant === "featured";

  return (
	<Link
	  to={`/blog/${post.slug}`}
	  className={cn(
		"group relative flex flex-col rounded-3xl bg-card/90 border border-border/80 overflow-hidden shadow-sm hover:shadow-[0_0_45px_hsl(var(--primary)/0.22)] transition-all duration-300 hover:-translate-y-1",
		className,
	  )}
	>
	  
	  <div className={cn("relative overflow-hidden", isFeatured ? "h-64 sm:h-80" : "h-52")}>
		{post.imageUrl ? (
		  <div
			className="w-full h-full bg-cover bg-center"
			style={{ backgroundImage: `url(${post.imageUrl})` }}
		  />
		) : (
		  <div className="w-full h-full bg-gradient-to-tr from-primary/40 via-navy to-background" />
		)}
		{/* лёгкий overlay */}
		<div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
		{/* тег */}
		<div className="absolute left-4 top-4 inline-flex items-center rounded-full bg-background/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.26em] text-primary">
		  {post.tag}
		</div>
	  </div>

	  {/* контент */}
	  <div className="flex flex-1 flex-col justify-between px-4 sm:px-5 pb-4 sm:pb-5 pt-4">
		<div className="space-y-2">
		  <h3
			className={cn(
			  "font-semibold text-base sm:text-lg leading-snug group-hover:text-primary transition-colors",
			  isFeatured && "sm:text-xl",
			)}
		  >
			{post.title}
		  </h3>
		  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
			{post.excerpt}
		  </p>
		</div>

		<div className="mt-4 flex items-center justify-between text-[11px] sm:text-xs text-muted-foreground/80">
		  <div className="flex flex-col">
			<span>{post.author}</span>
			<span>{post.readTime}</span>
		  </div>
		  <span>{post.date}</span>
		</div>
	  </div>
	</Link>
  );
};